<% include Header %>


<main class="container custom-container">
    <div class="row">
        <article class="col">
            <h1>$Title</h1>
            $Content
        </article>
    </div>

    <% if $Form %>
        $Form
    <% end_if %>
    <div id="root"></div>
</main>

<% include Footer %>
