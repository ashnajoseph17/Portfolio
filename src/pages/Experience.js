import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import { School } from '@material-ui/icons'

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#daba09'>
        <VerticalTimelineElement className='vertical-timeline-element--education' date = '2015-2017' iconStyle={{background: "#daba09",color:"#fff"} } icon = {<School/>}> 
        <h3 className='vertical-timeline-element-title'>DonBosco Central School,Kottayam</h3>
        <p>Highschool education</p>
        <p>CGPA : 10</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date = '2017-2019' iconStyle={{background: "#daba09",color:"#fff"} } icon = {<School/>}> 
        <h3 className='vertical-timeline-element-title'>DonBosco Higher Secondary School,Kottayam</h3>
        <p>Higher secondary education</p>
        <p>Percentage : 93</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date = '2019-2023' iconStyle={{background: "#daba09",color:"#fff"} } icon = {<School/>}> 
        <h3 className='vertical-timeline-element-title'>Saintgits College of Engineering,Kottayam</h3>
        <p>B.Tech in Computer Science and Engineering</p>
        <p>CGPA : 7.8</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
