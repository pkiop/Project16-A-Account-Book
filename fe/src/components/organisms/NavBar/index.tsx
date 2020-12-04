import React, { useCallback } from 'react';
import { toJS } from 'mobx';
import IconButton from 'components/molecules/IconButton';
import homeSvg from 'assets/svg/home.svg';
import graphSvg from 'assets/svg/graph.svg';
import calendarSvg from 'assets/svg/calendar.svg';
import tagSvg from 'assets/svg/tag.svg';
import plusSvg from 'assets/svg/plus.svg';
import { TransactionStore } from 'stores/Transaction';
import { useHistory, useParams } from 'react-router-dom';
import * as S from './style';

const onClickHandler = (history: any, title: string) =>
  useCallback(() => {
    history.push(`/calender/${title}`);
  }, [toJS(TransactionStore.dates)]);

const NavBar = ({ ...props }): React.ReactElement => {
  const history = useHistory();
  const { account } = useParams<any>();
  return (
    <S.NavBar {...props}>
      <IconButton icon={homeSvg}>홈</IconButton>
      <IconButton icon={graphSvg}>통계</IconButton>
      <S.PlusButton icon={plusSvg} />
      <IconButton icon={calendarSvg} onClick={onClickHandler(history, account)}>
        달력
      </IconButton>
      <IconButton icon={tagSvg}>태그</IconButton>
    </S.NavBar>
  );
};

export default NavBar;
