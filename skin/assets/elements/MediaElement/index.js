import {__} from '@wordpress/i18n';
import {Fragment} from '@wordpress/element';
import {IconButton, Toolbar} from '@wordpress/components';
import {BlockControls, MediaPlaceholder, MediaUpload} from '@wordpress/editor';
import icons from './icons';

const MediaElement = (props) => {
  const {
    placeholderTitle = __('Media area', 'quizess'),
    showToolbar = true,
    toolbarOnTop = true,
    removeBtnStyle = true,
    tagName = 'img',
    mediaAlt,
    mediaTitle,
    mediaUrl,
    mediaId,
    className,
    onSelectMedia,
    onRemoveMedia,
  } = props;

  const ALLOWED_MEDIA_TYPES = ['image'];

  const mediaUpload = (
    <MediaUpload
      onSelect={onSelectMedia}
      allowedTypes={ALLOWED_MEDIA_TYPES}
      value={mediaId}
      render={({open}) => (
        <IconButton
          className="components-toolbar__control"
          label={__('Edit Media', 'quizess')}
          icon="edit"
          onClick={open}
        />
      )}
    />
  );

  const removeStyles = {
    display: (removeBtnStyle) ? 'flex' : false,
    padding: (removeBtnStyle) ? '12px 8px' : false,
  };

  const removeElement = (
    <button
      className="remove__media-btn"
      style={removeStyles}
      onClick={onRemoveMedia}
    >
      {icons.minus}
    </button>
  );

  const renderToolbarEditButton = () => {
    if (toolbarOnTop) {
      return (
        <Fragment>
          <BlockControls>
            <Toolbar>
              {mediaUpload}
            </Toolbar>
          </BlockControls>
          {(onRemoveMedia) && removeElement}
        </Fragment>
      );
    }
    return (
      <Fragment>
        {(onRemoveMedia) && removeElement}
        {mediaUpload}
      </Fragment>
    );
  };


  const renderImage = () => {
    if (tagName === 'div') {
      return (
        <Fragment>
          {(showToolbar) && renderToolbarEditButton()}
          <div
            className={`media-image-class ${className}`}
            style={{
              backgroundImage: `url(${mediaUrl})`,
            }}
          >
          </div>
        </Fragment>
      );
    }
    const alt = (mediaAlt) || mediaTitle;
    return (
      <Fragment>
        {(showToolbar) && renderToolbarEditButton()}
        <figure className={className}>
          <img className="media-image-class" src={mediaUrl} alt={alt} />
        </figure>
      </Fragment>
    );

  };

  const renderPlaceholder = () => {
    return (
      <MediaPlaceholder
        icon="format-image"
        labels={{
          title: placeholderTitle,
        }}
        onSelect={onSelectMedia}
        accept="image/*"
        allowedTypes={ALLOWED_MEDIA_TYPES}
      />
    );
  };

  if (mediaUrl) {
    return renderImage();
  }

  return renderPlaceholder();
};

export default MediaElement;
