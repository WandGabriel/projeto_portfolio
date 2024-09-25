import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GitHubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
      voluptatum ab voluptatibus atque, suscipit amet, excepturi consequatur at
      inventore fugiat ipsa nisi odit sed repellendus minus deleniti sunt.
      Tempora, officiis.
    </Paragrafo>
    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=wandgabriel&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=wandgabriel&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSecao>
  </section>
)

export default Sobre
