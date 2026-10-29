import { useMemo, useState } from 'react';
import { games, categories, quickGames } from './data/games';

const defaultView = 'All';

function App() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(defaultView);
  const [selectedGame, setSelectedGame] = useState(games[0]);

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesCategory =
        activeCategory === defaultView || game.category === activeCategory;
      const matchesQuery =
        query.trim() === '' ||
        `${game.title} ${game.tags.join(' ')} ${game.description}`
          .toLowerCase()
          .includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">A</div>
          <div>
            <p className="eyebrow">Arcade Portal</p>
            <h1>Play public browser games</h1>
          </div>
        </div>

        <nav className="top-actions">
          <a href="#catalog">Catalog</a>
          <a href="#mini-games">Quick Play</a>
          <button className="primary-btn">Browse 1000+ titles</button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="pill">Free • Browser • Public Access</p>
            <h2>Find your next favorite game in seconds.</h2>
            <p className="subtext">
              Discover retro classics, pixel adventures, puzzle challenges, and easy
              casual games from public web sources designed for instant play.
            </p>

            <div className="hero-actions">
              <button className="primary-btn" onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore games
              </button>
              <button className="secondary-btn" onClick={() => document.getElementById('mini-games')?.scrollIntoView({ behavior: 'smooth' })}>
                Play now
              </button>
            </div>

            <div className="metrics">
              <div>
                <strong>1000+</strong>
                <span>Curated titles</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>Instant play</span>
              </div>
              <div>
                <strong>0</strong>
                <span>Paywalls</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="game-preview" style={{ background: selectedGame.color }}>
              <span className="badge">Featured</span>
              <h3>{selectedGame.title}</h3>
              <p>{selectedGame.description}</p>
              <div className="preview-meta">
                <span>{selectedGame.category}</span>
                <span>{selectedGame.difficulty}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="catalog" id="catalog">
          <div className="catalog-header">
            <div>
              <p className="eyebrow alt">Game Catalog</p>
              <h3>Browse public titles</h3>
            </div>
            <label className="search-box">
              <span>Search</span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, tag, or style"
              />
            </label>
          </div>

          <div className="category-row">
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? 'chip active' : 'chip'}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="card-grid">
            {filteredGames.map((game) => (
              <article key={game.id} className="game-card">
                <div className="card-art" style={{ background: game.color }}>
                  <span>{game.genre}</span>
                </div>
                <div className="card-body">
                  <div className="card-topline">
                    <h4>{game.title}</h4>
                    <span>{game.rating}</span>
                  </div>
                  <p>{game.description}</p>
                  <div className="tag-row">
                    {game.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="card-footer">
                    <small>
                      {game.category} • {game.platform}
                    </small>
                    <button className="small-primary" onClick={() => setSelectedGame(game)}>
                      Details
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mini-games" id="mini-games">
          <div className="section-heading">
            <p className="eyebrow alt">Quick Play</p>
            <h3>Playable inside the app</h3>
          </div>

          <MemoryMatch />
        </section>
      </main>

      {selectedGame && (
        <div className="modal-backdrop" onClick={() => setSelectedGame(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <p className="eyebrow alt">Featured title</p>
                <h3>{selectedGame.title}</h3>
              </div>
              <button className="close-btn" onClick={() => setSelectedGame(null)}>
                ×
              </button>
            </div>

            <div className="modal-content">
              <div className="modal-art" style={{ background: selectedGame.color }}>
                <span>{selectedGame.genre}</span>
              </div>
              <div className="modal-copy">
                <p>{selectedGame.description}</p>
                <ul>
                  <li>Category: {selectedGame.category}</li>
                  <li>Difficulty: {selectedGame.difficulty}</li>
                  <li>Source: {selectedGame.source}</li>
                  <li>Platform: {selectedGame.platform}</li>
                </ul>
                <div className="modal-actions">
                  <a className="primary-btn" href={selectedGame.url} target="_blank" rel="noreferrer">
                    Play now
                  </a>
                  <button className="secondary-btn" onClick={() => setSelectedGame(null)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MemoryMatch() {
  const [cards, setCards] = useState(() => buildCards());
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);

  function buildCards() {
    const symbols = ['★', '▲', '●', '■', '♣', '✦'];
    const entries = [...symbols, ...symbols].map((symbol, index) => ({
      id: index,
      symbol,
      matched: false,
    }));

    return entries.sort(() => Math.random() - 0.5);
  }

  const handleClick = (cardIndex) => {
    if (selected.length === 2 || matched.includes(cardIndex)) return;

    const nextSelected = [...selected, cardIndex];
    setSelected(nextSelected);

    if (nextSelected.length === 2) {
      setMoves((prev) => prev + 1);
      const [first, second] = nextSelected;

      if (cards[first].symbol === cards[second].symbol) {
        setTimeout(() => {
          setMatched((prev) => [...prev, first, second]);
          setSelected([]);
        }, 450);
      } else {
        setTimeout(() => setSelected([]), 700);
      }
    }
  };

  const resetGame = () => {
    setCards(buildCards());
    setSelected([]);
    setMatched([]);
    setMoves(0);
  };

  const finished = matched.length === cards.length;

  return (
    <div className="memory-game">
      <div className="memory-header">
        <div>
          <h4>Memory Match</h4>
          <p>{finished ? 'You solved it!' : 'Flip cards to find pairs.'}</p>
        </div>
        <div className="memory-stats">
          <span>Moves: {moves}</span>
          <button className="secondary-btn" onClick={resetGame}>Reset</button>
        </div>
      </div>

      <div className="tile-grid">
        {cards.map((card, index) => {
          const isFaceUp = selected.includes(index) || matched.includes(index);
          return (
            <button
              key={`${card.symbol}-${index}`}
              className={isFaceUp ? 'tile revealed' : 'tile'}
              onClick={() => handleClick(index)}
            >
              {isFaceUp ? card.symbol : '?'}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
