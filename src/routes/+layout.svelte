<div>
    <header>
        <img src="logo.svg" alt="Student Pack" />
    </header>

    <main>
        <slot />
    </main>
    
    <nav>
        <a href="/"> <img src="home.svg" alt="Strona główna" /> </a>
        <a href="/szukaj"> <img src="search.svg" alt="Szukaj" /> </a>
        <a href="/info"> <img src="info.svg" alt="Informacje" /> </a>
    </nav>
</div>

<style>
    div {
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        max-width: 480px;
        min-height: 100vh;
    }

    header {
        box-sizing: border-box;
        display: grid;
        place-content: center;
        padding: 10px;
        box-shadow: 0 0 16px 0 #00000040;
    }

    header img {
        height: 40px;
    }

    main {
        flex: 1;
    }

    nav {
        position: fixed;
        bottom: 0;
        z-index: 1;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        max-width: 480px;
        padding: 10px;
        border-top: 1px solid #DDD;
    }

    nav img {
        width: 40px;
    }
</style>