import React, { useState, useCallback } from 'react';
import Template from 'components/templates/MainTemplate';
import Header from 'components/organisms/HeaderBar';
import MonthInfo from 'components/organisms/MonthInfoHeader';
import NavBarComponent from 'components/organisms/NavBar';
import useStatistics from 'hooks/useStatistics';
import PieChartDetail from 'components/organisms/PieChartDetail';
import { TransactionStore } from 'stores/Transaction';
import { observer } from 'mobx-react-lite';

const StatisticsDetailPage = () => {
  const statistics = useStatistics();
  const [showType, setShowType] = useState({
    income: false,
    expense: true,
  });
  const toggleType = useCallback(() => {
    setShowType((prevShowType) => ({
      income: !prevShowType.income,
      expense: !prevShowType.expense,
    }));
  }, []);
  const SubHeaderBar = (
    <MonthInfo
      total={TransactionStore.totalPricesExceptFilterAndUnclassified}
    />
  );
  const Contents = (
    <PieChartDetail
      statistics={statistics}
      checkStatus={showType}
      onClick={toggleType}
    />
  );

  return (
    <Template
      HeaderBar={<Header />}
      SubHeaderBar={SubHeaderBar}
      Contents={Contents}
      NavBar={<NavBarComponent />}
    />
  );
};

export default observer(StatisticsDetailPage);
