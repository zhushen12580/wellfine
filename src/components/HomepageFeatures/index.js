import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '家居用品',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        欧美流行硅胶家居用品，跨境电商热销橱柜垫、餐垫、餐具、厨具、烘焙用具批发。
      </>
    ),
  },
  {
    title: '宠物用品',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        欧美流行硅胶宠物用品，跨境电商热销宠物垫、狗碗、狗粮袋、宠物玩具、宠物清洁用具批发。
      </>
    ),
  },
  {
    title: '母婴用品',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        欧美流行硅胶母婴用品，跨境电商热销硅胶牙胶，硅胶玩具，硅胶奶瓶、硅胶口水兜批发。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
