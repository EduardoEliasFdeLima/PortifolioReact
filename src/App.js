import './App.css';
import Header from './components/header.js'
import Home from './components/Home.js'
import Experiencias from './components/Experiencias.js';
import Formacao from './components/Formacao.js';
import Projetos from './components/Projetos.js';
import Contato from './components/Contato.js';



function App() {

  function ChangeColor() {
    //let colors = [amarelo,    roxo,       azul,     verde,    vermelho,  verdeagua  laranja,    rosa]
    let colors = ["#DEC834", "#B134DE", "#34BFDE", "#34DE4D", "#DE3434", "#34DEB7", "#DEA834", "#DE348F"];
    let colors2 = ["#FFEA63", "#DD63FF", "#63EAFF", "#63FF7A", "#FF6363", "#63FFC6", "#FFBE63", "#FF6399"];
    let colors3 = ["#E4D04C", "#9A44E5", "#44B7E5", "#44E561", "#E54444", "#44E5D8", "#E58444", "#E54495"];

    // Gerando um número aleatório para selecionar a cor
    const randomIndex = Math.floor(Math.random() * colors.length);

    // Alterando as variáveis CSS
    document.documentElement.style.setProperty('--main-color', colors[randomIndex]);
    document.documentElement.style.setProperty('--second-color', colors2[randomIndex]);
    document.documentElement.style.setProperty('--third-color', colors3[randomIndex]);
  }

  

  return (
    <div className="App" onClick={ChangeColor}>
      <Header />
      <Home />
      <Experiencias />
      <Formacao />
      <Projetos />
      <Contato />
    </div>
  );
}

export default App;
