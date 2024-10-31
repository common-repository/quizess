import {chunk} from 'lodash';
import {__} from '@wordpress/i18n';
import classnames from 'classnames';

const Pagination = (props) => {
  const {
    className = 'pagination',
    items = 1,
    page = 0,
    onPageChange,
    elementItems,
  } = props;

  const elements = (elementItems) ? chunk(elementItems, items) : [];

  const handlePageChange = (value) => {

    let pageNumber;

    switch (value) {
      case 'less':
        pageNumber = (page === 0) ? page : page - 1;
        break;
      case 'more':
        pageNumber = (page === elements.length - 1) ? page : page + 1;
        break;
      default:
        pageNumber = value;
        break;
    }
    onPageChange(pageNumber);
  };

  const paginationElements = (elements) ? elements.map((value, index) => {
    const paginationItemClasses = classnames(
      `${className}__item`,
      {active: (index === page)},
    );

    return <li
      className={paginationItemClasses}
      role="treeitem"
      key={index}
      onKeyPress={() => {
        handlePageChange(index);
      }}
      onClick={() => {
        handlePageChange(index);
      }}
    >
      {index + 1}
    </li>;
  }) : [];

  const getArrowElements = (value) => {

    if (elements.length < 1) {
      return ('');
    }
    if (page === 0 && value === 'less') {
      return ('');
    }

    if (page === elements.length - 1 && value === 'more') {
      return ('');
    }

    const sign = (value === 'more') ? __('Next', 'quizess') : __('Prev', 'quizess');

    return (
      <li
        className={`${className}__item`}
        role="treeitem"
        onKeyPress={() => {
          handlePageChange(value);
        }}
        onClick={() => {
          handlePageChange(value);
        }}
      >
        {sign}
      </li>
    );

  };

  return (
    <ul
      className={`${className}__menu`}
    >
      {getArrowElements('less')}
      {paginationElements}
      {getArrowElements('more')}
    </ul>
  );
};

export default Pagination;
