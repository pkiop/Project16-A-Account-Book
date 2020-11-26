import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { withKnobs } from '@storybook/addon-knobs';
import MonthInfoHeader from 'components/organisms/MonthInfoHeader';
import AccountDate from 'components/organisms/AccountDate';
import HeaderBar from 'components/organisms/HeaderBar';
import FilterBar from 'components/organisms/FilterBar';
import NavBar from 'components/organisms/NavBar';
import { TransactionType } from 'stores/Transaction';
import locksvg from 'assets/svg/lock.svg';
import HeaderNav from '.';

export default {
  title: 'templates/HeaderNav',
  component: HeaderNav,
  decorators: [withKnobs],
};

export const HeaderNavSample = () => {
  const testTransactionList: TransactionType[] = [
    {
      id: 'dekvmczld',
      date: new Date(),
      icon: locksvg,
      client: '시원한 육개장',
      category: '식사',
      method: '네이버 페이',
      price: 10000,
    },
    {
      id: 'akjlwkndlkx',
      date: new Date(),
      client: '얼큰한 국밥',
      category: '식사',
      method: '네이버 페이',
      price: 6000,
    },
    {
      id: 'ajabjfdlkx',
      date: new Date(),
      client: '달달한 하리보',
      category: '간식',
      method: '현금',
      price: 30000,
    },
  ];

  const MonthInfoHeaderComponent = (
    <MonthInfoHeader month={11} total={{ income: 20000, expense: 40000 }} />
  );
  const AccountDateComponent = (
    <>
      <FilterBar />
      <AccountDate date={new Date()} transactionList={testTransactionList} />
    </>
  );
  const NavBarComponent = <NavBar />;
  return (
    <ThemeProvider theme={theme}>
      <HeaderNav
        HeaderBar={<HeaderBar />}
        SubHeaderBar={MonthInfoHeaderComponent}
        Contents={AccountDateComponent}
        NavBar={NavBarComponent}
      />
    </ThemeProvider>
  );
};
