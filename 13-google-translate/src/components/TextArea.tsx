import { Form } from 'react-bootstrap';
import { SectionType } from '../types';

interface TextAreaProps {
  type: SectionType;
  value: string;
  isLoading?: boolean;
  onChange: (text: string) => void;
}

const commonStyles = { border: 0, height: '150px' };

const getPlaceholder = ({
  type,
  isLoading
}: {
  type: SectionType;
  isLoading?: boolean;
}) => {
  if (type === SectionType.From) return 'Introducir texto';
  if (isLoading) return 'Traduciendo...';
  return 'Traducción';
};

function TextArea({ type, value, isLoading, onChange }: TextAreaProps) {
  const styles =
    type === SectionType.From
      ? commonStyles
      : { ...commonStyles, backgroundColor: '#F5F5F5' };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <Form.Control
      as="textarea"
      disabled={type === SectionType.To}
      placeholder={getPlaceholder({ type, isLoading })}
      value={value}
      autoFocus={type === SectionType.From}
      style={styles}
      onChange={handleChange}
    />
  );
}

export default TextArea;
