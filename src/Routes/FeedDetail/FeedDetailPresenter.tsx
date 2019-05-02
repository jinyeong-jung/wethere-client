import React from "react";
import { MutationFn } from "react-apollo";
import Helmet from "react-helmet";
import Exit from "src/Components/Exit";
import Form from "src/Components/Form";
import styled from "../../typed-components";
import { feedDetail, getComments, getMyProfile } from "../../types/api";

const Container = styled.div`
    height: 100vh;
    background-color: ${props => props.theme.yellowColor}
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ExtendedExit = styled(Exit)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const FeedContainer = styled.div`
padding-top: 20px;
  background-color: white;
  width: 80vw
  height: 90vh;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PicContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Picture = styled.img`
  max-width: 100%;
  height: 150px;
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100%;
  overflow: auto;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.2);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.2);
  }
  padding: 10px;
`;

const Label = styled.div`
  color: ${props => props.theme.blackColor};
  margin-bottom: 10px;
  font-size: 14px;
`;

const Text = styled.div`
  color: ${props => props.theme.greyColor}
  font-size:12px;
  margin-bottom: 10px;
`;

const ExtendedButton = styled.input`
  margin: 15px 0;
  width: 40%;
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  background-color: transparent;
  color: rgba(0, 0, 0, 0.3);
  padding: 5px;
  cursor: pointer;
`;

const AlertContainer = styled.div`
  position: absolute;
  top: 30%;
  border: solid 20px ${props => props.theme.yellowColor};
  background-color: white;
  width: 300px;
  height: 180px;
  z-index: 2;
  border-radius: 20px;
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

const AlertText = styled.div`
  width: 100%;
  text-align: center;
  color: ${props => props.theme.blackColor};
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

const AlertBtn = styled.input`
  border: none;
  background-color: ${props => props.theme.lightGreyColor};
  width: 100px;
  padding: 10px 15px;
  color: white;
  cursor: pointer;
`;

const CommentContainer = styled.div`
  background-color: #dfdfdf;
  width: 100%;
  height: 100%;
  overflow: auto;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.2);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.2);
  }
`;

const Comments = styled.div`
  width: 100%;
  height: 81%;
  padding: 10px;
`;

const Comment = styled.div`
  font-size: 13px;
  margin-bottom: 5px;
  color: ${props => props.theme.greyColor};
  display: flex;
  align-items: center;
`;

const DeleteCmtBtn = styled.span`
  font-size: 10px;
  margin-left: 10px;
  cursor: pointer;
`;

const ExtendedForm = styled(Form)`
  width: 100%;
  height: 25px;
`;

const CommentInput = styled.input`
  border: none;
  border-top: 0.5px solid ${props => props.theme.whiteColor};
  background-color: #dfdfdf;
  width: 100%;
  height: 100%;
  padding: 5px;
  font-size: 13px;
  color: ${props => props.theme.greyColor};
`;

interface IProps {
  alertOpen: boolean;
  loading: boolean;
  data?: feedDetail;
  profileData?: getMyProfile;
  commentData?: getComments;
  openDeleteAlertFn: () => void;
  handleClickDelete: () => void;
  handleClickCancel: () => void;
  handleDeleteComment: MutationFn;
  handleAddComment: MutationFn;
  commentText: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FeedDetailPresenter: React.SFC<IProps> = ({
  alertOpen,
  loading,
  data: { FeedDetail: { feed = null } = {} } = {},
  profileData: { GetMyProfile: { user = null } = {} } = {},
  commentData: { GetComments: { comments = null } = {} } = {},
  openDeleteAlertFn,
  handleClickDelete,
  handleClickCancel,
  handleAddComment,
  commentText,
  onInputChange,
  handleDeleteComment
}) => {
  return (
    <Container>
      <Helmet>
        <title>피드 - We there</title>
      </Helmet>
      <ExtendedExit backTo="/wethere-client/feeds" />
      {!loading && feed && user && (
        <React.Fragment>
          <FeedContainer>
            <PicContainer>
              <Picture
                align="middle"
                src={
                  feed.feedPicture ||
                  "http://www.eltis.org/sites/default/files/default_images/photo_default_4.png"
                }
              />
            </PicContainer>
            <TextContainer>
              <Text>
                {feed.user.nickname} /{" "}
                {new Date(Number(feed.createdAt)).toLocaleString()} 작성
              </Text>
              <Text>
                {feed.place.name} / {feed.place.address}
              </Text>
              <Label>{feed.text}</Label>
            </TextContainer>
            <CommentContainer>
              <Comments>
                {comments && comments.length > 0 ? (
                  comments.map(comment => {
                    if (comment) {
                      return (
                        <Comment key={comment.id}>
                          {comment.userId === user.id ? "내" : "파트너"}가
                          작성한 댓글: {comment.text}
                          <DeleteCmtBtn
                            onClick={() => {
                              handleDeleteComment({
                                variables: { commentId: comment.id }
                              });
                            }}
                          >
                            ❌
                          </DeleteCmtBtn>
                        </Comment>
                      );
                    } else {
                      return;
                    }
                  })
                ) : (
                  <Comment>댓글이 없습니다.</Comment>
                )}
              </Comments>
            </CommentContainer>
            <ExtendedForm submitFn={handleAddComment}>
              <CommentInput
                type="text"
                value={commentText}
                name="commentText"
                onChange={onInputChange}
                placeholder="댓글을 입력하세요."
              />
            </ExtendedForm>
          </FeedContainer>
          <ExtendedButton
            type="button"
            value="피드 삭제하기"
            onClick={openDeleteAlertFn}
          />
        </React.Fragment>
      )}
      {alertOpen && (
        <AlertContainer>
          <AlertText>삭제하시겠습니까?</AlertText>
          <ButtonContainer>
            <AlertBtn type="button" value="네" onClick={handleClickDelete} />
            <AlertBtn
              type="button"
              value="아니요"
              onClick={handleClickCancel}
            />
          </ButtonContainer>
        </AlertContainer>
      )}
    </Container>
  );
};

export default FeedDetailPresenter;
