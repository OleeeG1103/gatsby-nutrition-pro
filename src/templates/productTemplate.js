import cx from 'classnames';
import React from 'react';

import { Button } from '../components/button';
// import { Calculator2 } from '../components/calculator2';
import { Order } from '../components/order-form';
import { Container } from '../components/container';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import productImg1 from '../images/product-1-bg.jpg';
import productImg2 from '../images/product-2-bg.jpg';
import productImg3 from '../images/product-3-bg.jpg';
import productImg4 from '../images/product-4-bg.jpg';
import commonStyles from './common.module.css';
import styles from './hero.module.css';
import s1icon1 from './icons/s1-icon1.svg';
import s1icon2 from './icons/s1-icon2.svg';
import s1icon3 from './icons/s1-icon3.svg';
import s3icon1 from './icons/s3-icon1.svg';
import s3icon2 from './icons/s3-icon2.svg';
import s3icon3 from './icons/s3-icon3.svg';
import s3icon4 from './icons/s3-icon4.svg';
import section1 from './section1.module.css';
import section2 from './section2.module.css';
import section3 from './section3.module.css';
import section4 from './section4.module.css';

// import angleDownIcon from './icons/angle-down-icon.svg';
const ProductTemplate = ({ productId, title, productList }) => {
  const scroll = useSmoothScroll()

  const scrollTo = selector => () => {
    selector && scroll.animateScroll(document.getElementById(selector))
  }

  const img = productId => {
    let img = null
    switch (true) {
      case productId === "1":
        img = productImg1
        break
      case productId === "2":
        img = productImg2
        break
      case productId === "3":
        img = productImg3
        break
      case productId === "4":
        img = productImg4
        break
      default:
        img = productImg1
        break
    }
    return img
  }
  return (
    <>
      <section className={styles.productHero}>
        <img src={img(productId)} className={styles.productHeroImg} alt="bg" />
        <div className={styles.productHeroCaption}>
          <Container className={styles.heroContainer}>
            <h1 className={styles.productHeroTitle}>{title}</h1>
            <ul className={styles.productHeroList}>{productList()}</ul>
            <Button
              type="primary"
              className={styles.productHeroBtn}
              handleClick={scrollTo("calculator")}
            >
              Spo????tat cenu
            </Button>
          </Container>
        </div>
      </section>
      <section className={cx("section", section1.section)}>
        <Container>
          <h3 className={cx("sectionTitle", section1.title)}>
            J??deln????ek na m??ru tv??m c??l??m
          </h3>
          <p className={section1.text}>
            N???? speci??ln?? algoritmus, kter?? pracuje s nejnov??j????mi poznatky ze
            sv??ta dietologie, ti p??esn?? ur???? tv??j denn?? kalorick?? p????jem na
            z??klad?? m????en?? slo??en?? tv??ho t??la a tv??ch c??l??. Po kontrole na????m
            dietologem ti algoritmus sestav?? j??deln????ek na m??ru s p??esn??
            stanoven??mi makronutrienty.
          </p>
        </Container>
        <Container>
          <div className={section1.cardGrid}>
            <div className={section1.card}>
              <div className={section1.cardIcon}>
                <img src={s1icon1} alt="icon" />
              </div>
              <div className={section1.cardBody}>
                <h5 className={section1.cardTitle}>Ka??d?? den nov?? j??dlo</h5>
                <p className={section1.cardText}>
                  Menu slo??en?? z 300 nutri??n?? vyv????en??ch a chutn??ch j??del? Pro
                  n??s ????dn?? probl??m! Na??e menu pravideln?? obm????ujeme, a tak na
                  tebe ka??d?? den ??ek?? nov??, chutn?? a ??erstv?? uva??en?? j??dlo.
                </p>
              </div>
            </div>
            <div className={section1.card}>
              <div className={section1.cardIcon}>
                <img src={s1icon2} alt="icon" />
              </div>
              <div className={section1.cardBody}>
                <h5 className={section1.cardTitle}>Pr??miov?? suroviny </h5>
                <p className={section1.cardText}>
                  V??dy ??erstv?? a kvalitn?? suroviny jsou pro zdrav?? stravov??n??
                  naprost??m z??kladem. V NutritionPro jsou proto takov?? suroviny
                  od ??esk??ch dodavatel?? pravidlem.
                </p>
              </div>
            </div>
            {/* <div className={section1.card}>
              <div className={section1.cardIcon}>
                <img src={s1icon3} alt="icon" />
              </div>
              <div className={section1.cardBody}>
                <h5 className={section1.cardTitle}>
                  Mo??nost vylou??it a?? 3 potraviny
                </h5>
                <p className={section1.cardText}>
                  Je n??co, co nej???? nebo ti nechutn??? Nevad??. U n??s m????e?? z
                  j??deln????ku vylou??it a?? 3 druhy potravin.
                </p>
              </div>
            </div> */}
          </div>
          {/* <div className="text-center">
            <button
              type="button"
              className={section1.link}
              onClick={scrollTo("section-2")}
            >
              Vzorov?? j??deln????ek
              <img src={angleDownIcon} alt="icon" />
            </button>
          </div> */}
        </Container>
      </section>
      {/* <section className={cx("section", section2.section)} id="section-2">
        <Container className={section2.container}>
          <h3 className={cx("sectionTitle -light", section2.title)}>
            Diagnostika t??la
          </h3>
          <p className={section2.text}>
            Zm??????me t?? na p????stroji Tanita, kter?? n??m uk????e, jak?? m???? pom??r mezi
            svalovou a tukovou hmotou, a uk????e mno??stv?? ??trobn??ho tuku a vody v
            t??le.
          </p>
          <p className={section2.text}>
            Tyto informace jsou nezbytn?? nejen pro nastaven?? individu??ln??ho
            j??deln????ku, ale tak?? pro kontrolu tv??ch v??sledk??.
          </p>
          <p className={section2.text}>
            Jednou za 14 dn?? t?? p??em?????? n???? za??kolen?? pracovn??k, a to na m??st??,
            kter?? si s??m ur??????.
          </p>
        </Container>
      </section> */}
      {/* <section className={cx("section", section3.section)}>
        <Container className={section3.container}>
          <h3 className={cx("sectionTitle", section3.title)}>
            Dohled v????ivov??ho poradce
          </h3>
          <p className={section3.text}>
            Dietolog se star?? o to, aby cesta za tv??m c??lem byla co mo??n??
            nejsnaz????. Dohl?????? na pln??n?? c??l?? a podle v??sledk?? m????en?? a tv??
            zp??tn?? vazby, upravuje j??deln????ek. Ka??d?? m??s??c ti od n??j p??ijde
            vyhodnocen??, kde se p??esn?? dozv????, jak si vede??.
          </p>
          {/* <div className="text-center">
            <button
              type="button"
              className={section3.link}
              onClick={scrollTo("section-4")}
            >
              V??ce info o na??em v????ivov??m poradci
              <img src={angleDownIcon} alt="icon" />
            </button>
          </div> */}
      {/* </Container>
      </section> */}
      <section className={cx("section", section4.section)} id="section-4">
        <Container>
          <h3 className={cx("sectionTitle", section4.title)}>
            Rozvoz a?? k tob?? ke dv??????m
          </h3>
          <p className={section4.text}>
            J??dlo ti dovezeme a?? ke dve????m tv??ho domova a v ??as, kter?? n??m s??m
            sd??l????. Rozv??????me ve ve??ern??ch hodin??ch od 17 do 22 hodin, a to
            ka??d?? ??ter??, ??tvrtek a ned??li.
          </p>
        </Container>
        <Container>
          <div className={section4.cardGrid}>
            <div className={section4.card}>
              <div className={section4.cardIcon}>
                <img src={s3icon1} alt="icon" />
              </div>
              <div className={section4.cardBody}>
                <h5 className={section4.cardTitle}>Doprava je zdarma</h5>
                <p className={section4.cardText}>
                  Rozv??????me po cel?? Praze zcela zadarmo.
                </p>
              </div>
            </div>
            <div className={section4.card}>
              <div className={section4.cardIcon}>
                <img src={s3icon2} alt="icon" />
              </div>
              <div className={section4.cardBody}>
                <h5 className={section4.cardTitle}>
                  Vyber si p??esn?? ??as doru??en??
                </h5>
                <p className={section4.cardText}>2hodinov?? ??asov?? okna</p>
              </div>
            </div>
            <div className={section4.card}>
              <div className={section4.cardIcon}>
                <img src={s3icon3} alt="icon" />
              </div>
              <div className={section4.cardBody}>
                <h5 className={section4.cardTitle}>
                  Mo??nost zm??nit m??sto doru??en??
                </h5>
                <p className={section4.cardText}>
                  Sta???? n??m napsat v den rozvozu do 15 hodin a my ti j??dlo
                  dovezeme na novou adresu.
                </p>
              </div>
            </div>
            <div className={section4.card}>
              <div className={section4.cardIcon}>
                <img src={s3icon4} alt="icon" />
              </div>
              <div className={section4.cardBody}>
                <h5 className={section4.cardTitle}>Odb??rn?? m??sto </h5>
                <p className={section4.cardText}>
                  J??dlo si m????e?? vyzvednout i na na??em odb??rn??m m??st?? v centru
                  Prahy.
                </p>
              </div>
            </div>
          </div>
          {/* <div className={cx("text-center", section4.buttons)}>
            <div className={section4.buttonsTitle}>Voz??me i k V??m?</div>
            <Button type="outline" className={section4.button}>
              Zkontrolovat adresu
            </Button>
          </div> */}
        </Container>
      </section>
      <Order className={commonStyles.calculator} id="calculator" />
    </>
  )
}

export default ProductTemplate
