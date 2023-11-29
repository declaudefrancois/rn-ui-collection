import React, {useState} from 'react';
import Tabs from '../Tabs';

const tabItems = [
  {
    id: 1,
    title: 'Cappuccino',
    active: true,
  },
  {
    id: 2,
    title: 'Machiato',
  },
  {
    id: 3,
    title: 'Latte',
  },
  {
    id: 4,
    title: 'Americano',
  },
];

export default function CoffeeKindTabs() {
  const [active, setactive] = useState(1);

  const onTabPress = (id: number) => {
    setactive(id);
  };

  return <Tabs items={tabItems} activeTab={active} onTabPress={onTabPress} />;
}
