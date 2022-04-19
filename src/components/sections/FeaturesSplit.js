import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class FeaturesSplit extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    const sectionHeader = {
      title: 'Bold startup toolkit',
      paragraph: 'Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses}>

              <div className="split-item reveal-scale-up">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16">
                    Strap it on
                  </h3>
                  <p className="m-0">
                    Eight vibrating motors are build into the belt. The belt hides discreetly under your shirt.
                  </p>
                </div>
                <div className={
                  classNames(
                    'is-3d illustration-element-03',
                    imageFill && 'split-item-image-fill'
                  )}>
                  <Image
                    src={require('./../../assets/images/dresser-01.svg')}
                    alt="Features split 01"
                    width={528}
                    height={396} />
                </div>
              </div>

              <div className="split-item reveal-scale-up">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16">
                    Train your brain
                  </h3>
                  <p className="m-0">
                    As you walk around your city, the Compass Belt will vibrate in the direction of north. The same way a compass always points north.
                  </p>
                </div>
                <div className={
                  classNames(
                    'is-3d illustration-element-04',
                    imageFill && 'split-item-image-fill'
                  )}>
                  <Image
                    src={require('./../../assets/images/walker-01.svg')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
                </div>
              </div>

              <div className="split-item reveal-scale-up">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16">
                    Know your way
                  </h3>
                  <p className="m-0">
                  The belt speaks directly to your subconsious brain. You will build up a map of your city in your mind without even realizing.
                  </p>
                </div>
                <div className={
                  classNames(
                    'is-3d illustration-element-05',
                    imageFill && 'split-item-image-fill'
                  )}>
                  <Image
                    src={require('./../../assets/images/thinker-01.svg')}
                    alt="Features split 03"
                    width={528}
                    height={396} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;