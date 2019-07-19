<header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <div class="sb__story-container">
                <section class="sb__group">
                    <h2 class="sb__header">Main navigation</h2>
                    <nav aria-label="Main Navigation">
                        <ul class="mega-nav" tabindex="-1">
                            <li
                                class="mega-nav__item mega-nav__item--with-children"
                                ref="item[0]"
                                :class="{
              'mega-nav__item--open': 0 === activeItem,
              'mega-nav__item--closing': 0 === closingItem,
              'mega-nav__item--immediate': transitionEnabled === false,
            }"
                            >
                                <a href="#"
                                   class="mega-nav__link menu-link"
                                   @click.prevent="toggle(0)"
                                   @keydown.down.prevent="open(0)"
                                   @keydown.up.prevent="close(0)"
                                   @keydown.space.prevent="toggle(0)"
                                   :aria-expanded="0 === activeItem ? 'true' : 'false'"
                                   aria-controls="megaNav0"
                                   aria-owns="megaNav0"
                                >About us</a>
                                <div class="mega-nav__overlay" ref="overlay" @click.prevent="toggle(null)">
                                    <div class="mega-nav__content" @click.stop>
                                        <div class="container">
                                            <h2 class="nav-block__title"><a href="#">About Us</a></h2>
                                            <div class="row">
                                                <div class="col-6">
                                                    <p class="nav-block__summary">
                                                        This is an example page summary for About Us.
                                                    </p>
                                                </div>
                                                <div class="col-5 offset-1">
                                                    <div class="row">
                                                        <ul class="nav-block__links col">
                                                            <li class="nav-block__item">
                                                                <a href="#" class="nav-block__link">What we do</a>
                                                            </li>
                                                            <li class="nav-block__item">
                                                                <a href="#" class="nav-block__link">Our organisation</a>
                                                            </li>
                                                            <li class="nav-block__item">
                                                                <a href="#" class="nav-block__link">Our people</a>
                                                            </li>
                                                            <li class="nav-block__item">
                                                                <a href="#" class="nav-block__link">Careers</a>
                                                            </li>
                                                            <li class="nav-block__item nav-block__item--overflow">
                                                                <a href="#" class="nav-block__link">NRENs</a>
                                                            </li>
                                                            <li class="nav-block__item nav-block__item--overflow">
                                                                <a href="#" class="nav-block__link">Corporate publications</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li
                                class="mega-nav__item mega-nav__item--with-children"
                                ref="item[1]"
                                :class="{
              'mega-nav__item--open': 1 === activeItem,
              'mega-nav__item--closing': 1 === closingItem,
              'mega-nav__item--immediate': transitionEnabled === false,
            }"
                            >
                                <a href="#"
                                   class="mega-nav__link menu-link"
                                   @click.prevent="toggle(1)"
                                   @keydown.down.prevent="open(1)"
                                   @keydown.up.prevent="close(1)"
                                   @keydown.space.prevent="toggle(1)"
                                   :aria-expanded="1 === activeItem ? 'true' : 'false'"
                                   aria-controls="megaNav1"
                                   aria-owns="megaNav1"
                                >The network</a>
                                <div class="mega-nav__overlay" ref="overlay" @click.prevent="toggle(null)">
                                    <div class="mega-nav__content" @click.stop>
                                        <div class="container">
                                            <h2 class="nav-block__title"><a href="#">The Network</a></h2>
                                            <div class="row">
                                                <div class="col-6">
                                                    <p class="nav-block__summary">
                                                        This is an example page summary for The Network.
                                                    </p>
                                                </div>
                                                <div class="col-5 offset-1">
                                                    <div class="row">
                                                        <ul class="nav-block__links col">
                                                            <li class="nav-block__item">
                                                                <a href="#" class="nav-block__link">What we do</a>
                                                            </li>
                                                            <li class="nav-block__item">
                                                                <a href="#" class="nav-block__link">Our organisation</a>
                                                            </li>
                                                            <li class="nav-block__item">
                                                                <a href="#" class="nav-block__link">Our people</a>
                                                            </li>
                                                            <li class="nav-block__item">
                                                                <a href="#" class="nav-block__link">Careers</a>
                                                            </li>
                                                            <li class="nav-block__item nav-block__item--overflow">
                                                                <a href="#" class="nav-block__link">NRENs</a>
                                                            </li>
                                                            <li class="nav-block__item nav-block__item--overflow">
                                                                <a href="#" class="nav-block__link">Corporate publications</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="mega-nav__item">
                                <a href="#" class="mega-nav__link menu-link">Products & Services</a>
                            </li>
                            <li class="mega-nav__item">
                                <a href="#" class="mega-nav__link menu-link">Case Studies</a>
                            </li>
                            <li class="mega-nav__item">
                                <a href="#" class="mega-nav__link menu-link">News &amp; Events</a>
                            </li>
                            <li class="mega-nav__item">
                                <a href="#" class="mega-nav__link menu-link">Membership</a>
                            </li>
                            <li class="mega-nav__item">
                                <a href="#" class="mega-nav__link menu-link">Current State</a>
                            </li>
                        </ul>
                    </nav>
                    <div style="margin-top: 30px;">
                        <h1>Some test content</h1>
                        <p>This test content is to show how the meganav overlays content</p>
                    </div>
                </section>
            </div>
        </div>
    </nav>
</header>
