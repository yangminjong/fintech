import Flex from '@/components/layout/flex';
import Text, { TextProps } from '@/components/ui/text';
import { ReactNode } from 'react';

interface AdminSectionProps extends TextProps {
  children?: ReactNode;
  isVisibleHeader?: boolean;
  additionalElement?: ReactNode;
  label: string;
}

const AdminSection = (props: AdminSectionProps) => {
  const { children, isVisibleHeader = true, additionalElement, label } = props;

  return (
    <Flex direction={'column'} grow={'full'}>
      {((isVisibleHeader && label) || additionalElement) && (
        <Flex justify={'between'} align={'center'} grow={'wFull'} style={{ paddingBottom: '16px' }}>
          {isVisibleHeader && (
            <Text size={'4xl'} color={'main'} weight={'bold'}>
              {label}
            </Text>
          )}

          {additionalElement}
        </Flex>
      )}

      <Flex direction={'column'} grow={'full'} gap={'20px'}>
        {children}
      </Flex>
    </Flex>
  );
};

export default AdminSection;
