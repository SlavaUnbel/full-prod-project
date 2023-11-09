import { FC } from 'react';

import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction' | 'align'>

export const VStack: FC<VStackProps> = (props: VStackProps) => (
    <Flex align="start" direction="column" {...props} />
);
