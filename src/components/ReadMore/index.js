/* import {useState} from 'react'

import {
  MainContainer,
  Heading,
  Description,
  Image,
  Paragraph,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const displayText = reactHooksDescription.slice(0, 171)
  const [text, setText] = useState(displayText)

  const onChangeMoreText = () => {
    setText(prevText =>
      reactHooksDescription.slice(0, reactHooksDescription.length),
    )
  }

  const onChangeLessText = () => {
    setText(prevText => prevText.slice(0, 171))
  }

  return (
    <MainContainer>
      <Heading>React Hooks</Heading>
      <Description>Hooks are a new addition to React</Description>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Paragraph>{text}</Paragraph>
      {text.length === 171 ? (
        <button type="button" onClick={onChangeMoreText}>
          Read More
        </button>
      ) : (
        <button type="button" onClick={onChangeLessText}>
          Read Less
        </button>
      )}
    </MainContainer>
  )
}
export default ReadMore */

import {useState} from 'react'

import {
  MainContainer,
  ContentContainer,
  Title,
  Subtitle,
  Image,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isReadMore, setIsReadMore] = useState(false)

  const description = isReadMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)
  const buttonText = isReadMore ? 'Read Less' : 'Read More'

  const onClickButton = () => setIsReadMore(prevStatus => !prevStatus)

  return (
    <MainContainer>
      <ContentContainer>
        <Title>React Hooks</Title>
        <Subtitle>Hooks are a new addition to React</Subtitle>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>{description}</Description>
        <Button type="button" onClick={onClickButton}>
          {buttonText}
        </Button>
      </ContentContainer>
    </MainContainer>
  )
}

export default ReadMore
