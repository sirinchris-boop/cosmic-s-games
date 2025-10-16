* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
}

body {
  display: flex;
  background-color: #0c0c0c;
  color: white;
  min-height: 100vh;
}

.sidebar {
  width: 200px;
  background-color: #111;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #a4005a;
}

.sidebar h2 {
  margin-bottom: 15px;
  color: #ff0077;
}

.sidebar nav a {
  display: block;
  color: #ccc;
  text-decoration: none;
  margin: 10px 0;
  transition: 0.2s;
}

.sidebar nav a:hover {
  color: #fff;
}

main {
  flex: 1;
  padding: 20px;
}

header {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

header input, header select {
  padding: 10px;
  border-radius: 8px;
  border: none;
  outline: none;
  background-color: #1a1a1a;
  color: white;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.game-card {
  background-color: #2a0017;
  border-radius: 15px;
  padding: 10px;
  text-align: center;
  transition: 0.2s;
}

.game-card:hover {
  transform: scale(1.05);
  background-color: #400024;
}

.game-card img {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 10px;
}
