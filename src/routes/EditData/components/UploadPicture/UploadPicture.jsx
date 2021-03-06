import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './UploadPicture.scss';

const getImage = (name) => `${window.location.origin}/img/uploaded/${name}`;


/*
* UploadPicture
*/

export const UploadPicture = ({imageSrc, removePicture, index}) => (
  <li styleName="upload-picture">
    <img src={imageSrc.indexOf('data:image') !== -1 ? imageSrc : getImage(imageSrc)} alt="uploaded" />
    <a
      href="javascript:;"
      onClick={(event) => {
        event.preventDefault();
        removePicture(index);
      }}
    ><i styleName="icon-delete-pic" />Delete Picture</a>
  </li>

);

UploadPicture.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  removePicture: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default CSSModules(UploadPicture, styles);
