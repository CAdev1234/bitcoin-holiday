/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Button, Input, Modal, ModalBody } from 'reactstrap';

import FBIcon from 'components/svg/FBIcon';
import TwitterIcon from 'components/svg/TwitterIcon';
import LinkedInIcon from 'components/svg/LinkedInIcon';
import XIcon from 'components/svg/XIcon';

const ShareModal = ({ shareModal, setShareModal }) => {
  return (
    <Modal className="rc-sharemodal" isOpen={shareModal} toggle={() => setShareModal(!shareModal)}>
      <ModalBody className="position-relative">
        <div className="">
          <div className="title font-weight-bold">Share with friends</div>
          <div className="d-flex flex-row mt-4">
            <button className="social-btn" type="button">
              <FBIcon />
            </button>
            <button className="social-btn mx-4" type="button">
              <TwitterIcon />
            </button>
            <button className="social-btn" type="button">
              <LinkedInIcon />
            </button>
          </div>
          <div className="mt-4 d-flex align-items-center">
            <Input className="flex-1" placeholder="https://url.com" />
            <Button className="ml-3 font-weight-bold"
              color="primary"
            >
              Copy
            </Button>
          </div>
          <Button className="position-absolute close-btn" type="button" data-dismiss="modal" aria-label="Close">
            <XIcon />
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );

};

export default ShareModal;
