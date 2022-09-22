<% include Header %>

<div id="root"></div>

<main class="container">
    <div class="row">
        <article class="col">
            <h1>$Title</h1>
            $Content
        </article>
    </div>

    <% if $Form %>
        $Form
    <% end_if %>
</main>

<% include Footer %>
