<header>
    <nav class="navbar">
        <div class="navbar_heading">
            <a href="$BaseHref">$SiteConfig.Title</a>
        </div>
        <ul class="navbar_list">
            <% loop $Menu(1) %>
            <li class="nav-item">
                <a class="nav-link" href="$Link">$MenuTitle</a>
            </li>
            <% end_loop %>
        </ul>

    </nav>
</header>
