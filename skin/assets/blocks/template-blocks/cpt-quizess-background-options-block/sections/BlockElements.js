import {Fragment} from '@wordpress/element';
import {__} from '@wordpress/i18n';
import {
  MediaElement,
} from '../../../../elements';

function BlockElements(props) {
  const {
    attributes: {
      title,
      id,
      url,
      backgroundColor,
    },
    dispatchAttributesStore: {
      handleOnSelectMedia,
      handleOnRemoveMedia,
    },
  } = props;

  const defaultColor = '#0073A8';

  const backgroundColorVarriable = backgroundColor || defaultColor;

  const imageElement = (
    <MediaElement
      className="background-image-element"
      mediaTitle={title}
      mediaId={id}
      mediaUrl={url}
      onSelectMedia={handleOnSelectMedia}
      onRemoveMedia={handleOnRemoveMedia}
    />
  );


  return (
    <Fragment>
      <div className="bg-label">
        {__('Background Options', 'quizess')}
      </div>
      <div className="qz-help-mce-class is-centered">
        {__('Choose main background color & background image for this quiz', 'quizess')}
      </div>
      <div className="background-options">
        <div className="background-option background-color">
          <div
            className="background-color-element"
            style={{
              backgroundColor: backgroundColorVarriable,
            }}
          >
          </div>
        </div>
        <div className="background-option background-image">
          {imageElement}
        </div>
      </div>
    </Fragment>
  );
}

export default BlockElements;
