import React from 'react'
import { Container } from 'react-bootstrap'
import TitleSection from '../../components/common/TitleSection'
const LocalSeo = () => {
  return (
    <div className='section'>
      <Container>
        <TitleSection
          title='SEO On-Page Content '
          paragraph={`You have a website/online business which is struggling for ranking in Search Engines and has never been into top 10 positions. You want to grow your business, then DigiPremier is the best SEO company for you in this regard. We help your business independently identify observable activities that make it easier for people to find and convert on your website. DigiPremier assists you in developing appropriate, engaging content and expertly designed solutions that will propel you to the top of search results.\n
DigiPremier believes that just building backlinks for a website isn't all the SEO Services. It's all about making a website that users would like to visit–what that's search engines are looking for. We achieve results for you by ensuring that your website is found while people are looking for it and that you have what they want.
`}
          image='/images/banners/SEO.jpg'
        />
      </Container>
    </div>
  )
}

export default LocalSeo
