import News from '../components/News/index.js'

export default function Home() {
  return (
    <div>
      Hello World!
      <News 
        imageLink = "https://imgur.com/XieWlxw.png"
        newsTitle = "Notícia"
        newsHeadline = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      />
    </div>
  )
}
