import React from 'react';
import StatsBar  from './StatsBar';
import './StatsBar.scss';

export default {
  component: StatsBar, 
  title: 'Components/StatsBar',
}

export const Primary = () => <StatsBar primary>StatsBar</StatsBar>;