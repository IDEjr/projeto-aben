import Image from 'next/image'
import logo from '../../public/images/logo-footer.png'
import facebook from '../../public/images/icons/facebook.svg'
import instagram from '../../public/images/icons/instagram.svg'
import phone from '../../public/images/icons/phone.svg'
import mail from '../../public/images/icons/mail.svg'
import classes from './Footer.module.css'

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.content}>
        <div className={classes.logo}>
          <Image src={logo} />
        </div>
        <div className={classes.info}>
          <div className={classes.contacts}>
            <div className={classes.contact}>
              <div className={classes.icon}>
                <Image src={instagram} width='18%' height='18%'/>
              </div>
              <div>@abenrs_</div>
            </div>
            <div className={classes.contact}>
              <div className={classes.icon}>
                <Image src={mail} width='18%' height='18%'/>
              </div>
              <div>aben-rs@abennacional.org.br</div>
            </div>
            <div className={classes.contact}>
              <div className={classes.icon}>
                <Image src={phone} width='18%' height='18%'/>
              </div>
              <div>51 3232-3232</div>
            </div>
            <div className={classes.contact}>
              <div className={classes.icon}>
                <Image src={facebook} width='18%' height='18%'/>
              </div>
              <div>facebook/aben</div>
            </div>
          </div>
          <div className={classes.address}>
            <div>Porto Alegre - RS</div>
            <div>Av Venâncio Aires, 1191/142 - Bom Fim</div>
            <div>CEP 90040-193</div>
          </div>
        </div>
      </div>
    </div>
  )
}
