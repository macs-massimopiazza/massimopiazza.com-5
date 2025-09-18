<?php
// Path del file JSON dei feed
$feedFile = 'feeds.json';

// Funzioni di utilità
function loadFeeds($file) {
    if (!file_exists($file)) return [];
    return json_decode(file_get_contents($file), true);
}

function saveFeeds($file, $feeds) {
    file_put_contents($file, json_encode($feeds, JSON_PRETTY_PRINT));
}

function fetchArticles($feedUrl, $categories = []) {
    $articles = [];
    $rss = @simplexml_load_file($feedUrl);
    if ($rss) {
        foreach ($rss->channel->item as $item) {
            $categoryMatch = empty($categories);
            if (!$categoryMatch && isset($item->category)) {
                foreach ($item->category as $cat) {
                    if (in_array((string)$cat, $categories)) {
                        $categoryMatch = true;
                        break;
                    }
                }
            }
            if ($categoryMatch) {
                $articles[] = [
                    'title' => (string)$item->title,
                    'link' => (string)$item->link,
                    'pubDate' => (string)$item->pubDate,
                ];
            }
        }
    }
    return $articles;
}

// Caricamento feeds
$feeds = loadFeeds($feedFile);

// Gestione admin (aggiungi/modifica/elimina feed)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['action'])) {
        $url = trim($_POST['url'] ?? '');
        $name = trim($_POST['name'] ?? '');
        $categories = array_map('trim', explode(',', $_POST['categories'] ?? ''));
        $categories = $categories[0] == "" ? [] : $categories;
        switch ($_POST['action']) {
            case 'add':
                $feeds[] = ['name' => $name, 'url' => $url, 'categories' => $categories];
                break;
            case 'edit':
                $index = (int)$_POST['index'];
                if (isset($feeds[$index])) {
                    $feeds[$index] = ['name' => $name, 'url' => $url, 'categories' => $categories];
                }
                break;
            case 'delete':
                $index = (int)$_POST['index'];
                if (isset($feeds[$index])) {
                    array_splice($feeds, $index, 1);
                }
                break;
        }
        saveFeeds($feedFile, $feeds);
        header("Location: ".$_SERVER['PHP_SELF']);
        exit;
    }
}

// Selezione badge filtraggio
$selectedFeeds = $_GET['feeds'] ?? [];
if (!is_array($selectedFeeds)) $selectedFeeds = [$selectedFeeds];
?>

<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<title>RSS Aggregator</title>
<style>
<?php echo file_get_contents('style.css'); ?>
</style>
<script>
function toggleBadge(badge, feedName) {
    let urlParams = new URLSearchParams(window.location.search);
    let feeds = urlParams.getAll('feeds');
    if (feedName === 'tutti') {
        urlParams.delete('feeds');
        feeds = <?php echo json_encode(array_column($feeds, 'name')); ?>;
        feeds.forEach(f => urlParams.append('feeds', f));
    } else if (feedName === 'nessuno') {
        urlParams.delete('feeds');
    } else {
        let index = feeds.indexOf(feedName);
        if (index > -1) feeds.splice(index, 1);
        else feeds.push(feedName);
        urlParams.delete('feeds');
        feeds.forEach(f => urlParams.append('feeds', f));
    }
    window.location.search = urlParams.toString();
}
</script>
</head>
<body>

<h1>Articoli Curati</h1>

<!-- Badge filtraggio -->
<div class="feed-section">
    <span class="feed-badge <?php echo empty($selectedFeeds) ? 'selected' : '' ?>" onclick="toggleBadge(this,'tutti')">Tutti</span>
    <span class="feed-badge <?php echo empty($selectedFeeds) ? '' : 'selected' ?>" onclick="toggleBadge(this,'nessuno')">Nessuno</span>
    <?php foreach ($feeds as $feed): 
        $isSelected = in_array($feed['name'], $selectedFeeds);
    ?>
        <span class="feed-badge <?php echo $isSelected ? 'selected' : '' ?>" onclick="toggleBadge(this,'<?php echo $feed['name'] ?>')">
            <?php echo $feed['name'] ?>
        </span>
    <?php endforeach; ?>
</div>

<!-- Lista articoli combinata -->
<div class="feed-section">
    <ul class="article-list">
        <?php
        foreach ($feeds as $feed) {
            if (!empty($selectedFeeds) && !in_array($feed['name'], $selectedFeeds)) continue;
            $articles = fetchArticles($feed['url'], $feed['categories']);
            $articles = array_slice($articles, 0, 5);
            foreach ($articles as $article) {
                $date = new DateTime($article['pubDate']);
                // Formatter internazionale in italiano
                $formatter = new IntlDateFormatter(
                    'it_IT', 
                    IntlDateFormatter::LONG, 
                    IntlDateFormatter::NONE
                );
                $formatter->setPattern('d MMMM yyyy'); // esempio: 15 settembre 2015
                $formattedDate = $formatter->format($date);

                echo "<li><a href='{$article['link']}' target='_blank'>{$article['title']}</a> <small>{$formattedDate}</small> <small class='source'>".$feed['name']."</small></li>";
            }
        }
        ?>
    </ul>
</div>

<!-- Articoli divisi per feed -->
<?php foreach ($feeds as $feed): ?>
<div class="feed-section">
    <h2><?php echo $feed['name'] ?></h2>
    <ul class="article-list">
        <?php
        $articles = fetchArticles($feed['url'], $feed['categories']);
        $articles = array_slice($articles, 0, 7);
        foreach ($articles as $article) {
            $date = new DateTime($article['pubDate']);

            // Formatter internazionale in italiano
            $formatter = new IntlDateFormatter(
                'it_IT', 
                IntlDateFormatter::LONG, 
                IntlDateFormatter::NONE
            );
            $formatter->setPattern('d MMMM yyyy'); // esempio: 15 settembre 2015
            $formattedDate = $formatter->format($date);
            
            echo "<li><a href='{$article['link']}' target='_blank'>{$article['title']}</a> <small>{$formattedDate}</small></li>";
        }
        ?>
    </ul>
</div>
<?php endforeach; ?>

<!-- Admin -->
<div class="feed-admin">
    <h3>Gestione Feed</h3>
    <?php foreach ($feeds as $i => $feed): ?>
        <form method="POST" style="margin-bottom:5px;">
            <input type="hidden" name="index" value="<?php echo $i ?>">
            <input type="text" name="name" value="<?php echo $feed['name'] ?>" placeholder="Nome">
            <input type="text" name="url" value="<?php echo $feed['url'] ?>" placeholder="URL">
            <input type="text" name="categories" value="<?php echo implode(',', $feed['categories']) ?>" placeholder="Categorie (facoltativo)">
            <button type="submit" name="action" value="edit">Modifica</button>
            <button type="submit" name="action" value="delete">Elimina</button>
        </form>
    <?php endforeach; ?>

    <!-- Aggiungi nuovo feed -->
    <form method="POST">
        <input type="text" name="name" placeholder="Nome">
        <input type="text" name="url" placeholder="URL">
        <input type="text" name="categories" placeholder="Categorie (facoltativo)">
        <button type="submit" name="action" value="add">Aggiungi</button>
    </form>
</div>

</body>
</html>