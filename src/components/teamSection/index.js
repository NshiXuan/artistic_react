import React, { memo } from 'react'

import teamMember1 from '../../assets/images/team1.png'
import teamMember2 from '../../assets/images/team2.png'
import teamMember3 from '../../assets/images/team3.png'
import ParagraphText from '../heroSection/paragraphText'
import ServiceTitle from '../serviceSection/serviceTitle'
import TeamSectionStyle from './style'
import TeamMemberItem from './teamMemberItem'

const TeamSection = memo(() => {
  return (
    <TeamSectionStyle>
      <div className="container">
        <div className="team_wrapper">
          <div className="team_info">
            <ServiceTitle className="team_title">可用的最佳团队</ServiceTitle>
            <ParagraphText className="team_subtitle">团队成员</ParagraphText>
          </div>
          <div className="team_members">
            <TeamMemberItem img={teamMember1} name="小红" title="专业编辑" />
            <TeamMemberItem img={teamMember2} name="小明" title="摄影师" />
            <TeamMemberItem img={teamMember3} name="小黑" title="摄影师" />
          </div>
        </div>
      </div>
    </TeamSectionStyle>
  )
})

export default TeamSection