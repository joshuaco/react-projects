import { Container, Col, Row, Button, Stack } from 'react-bootstrap';
import { useEffect } from 'react';
import { useTranslate } from './hooks/useTranslate';
import { useDebounce } from './hooks/useDebounce';
import { AUTO_LANGUAGE } from './constants';
import { SectionType } from './types';
import { translate } from './services/translate';
import { ArrowsIcon, CopyIcon } from './components/Icons';
import LanguageSelector from './components/LanguageSelector';
import TextArea from './components/TextArea';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Disclaimer from './components/Disclaimer';

function App() {
  const {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    isLoading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  } = useTranslate();

  // <T> is infered from 'fromText' <string>
  const debouncedText = useDebounce(fromText, 400);

  useEffect(() => {
    if (debouncedText === '') return;
    translate({ fromLanguage, toLanguage, fromText: debouncedText }).then(
      setResult
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedText, toLanguage]);

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
  };

  return (
    <Container fluid>
      <Header />

      <Row className="mt-5">
        <Col xs={12} sm={true}>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>
        <Col xs="auto" className="mx-auto">
          <Button
            variant="link"
            disabled={
              fromLanguage === AUTO_LANGUAGE || fromLanguage === toLanguage
            }
            onClick={interchangeLanguages}
          >
            <ArrowsIcon />
          </Button>
        </Col>
        <Col xs={12} sm={true}>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
            />
            <div className="position-relative">
              <TextArea
                type={SectionType.To}
                isLoading={isLoading}
                value={result}
                onChange={setResult}
              />
              <Button
                variant="link"
                className="position-absolute bottom-0 left-0"
                onClick={handleCopy}
              >
                <CopyIcon />
              </Button>
            </div>
          </Stack>
        </Col>
      </Row>
      <Disclaimer />
    </Container>
  );
}

export default App;
