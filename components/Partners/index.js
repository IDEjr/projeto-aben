import Partner from './Partner'
import { ButtonBase } from '../ButtonBase'
import classes from './Partners.module.css'

function click() {
  console.log('clicked!')
}

export default function Partners () {
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.title}>
            Parceiros
          </div>
          <div className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit leo justo
            velit nulla ante dignissim diam adipiscing. Eu est id quam mauris. In
            sed vulputate in justo.
          </div>
          <ButtonBase
            onClick={click}
            style={{
              margin: '0',
              width: '146px',
              height: '44px'
            }}
          >
            Leia mais
          </ButtonBase>
        </div>
        <div className={classes.partners}>
          <Partner
            title='Cinema X'
            imageUrl='https://picsum.photos/1920/800'
          />
          <Partner
            title='Café'
            imageUrl='https://picsum.photos/1921/800'
          />
          <Partner
            title='Clube dos Enfermeiros'
            imageUrl='https://picsum.photos/1922/800'
          />
          <Partner
            title='Parceiro'
            imageUrl='https://picsum.photos/1923/800'
          />
          <Partner
            title='Farmácia Y'
            imageUrl='https://picsum.photos/1924/800'
          />
          <Partner
            title='Outro Parceiro'
            imageUrl='https://picsum.photos/1925/800'
          />
        </div>
      </div>
    </div>
  )
}