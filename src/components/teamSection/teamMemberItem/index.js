import React, { memo } from 'react'
import ParagraphText from '../../heroSection/paragraphText'
import TeamMemberItemStyle from './style'

const TeamMemberItem = memo(({ img, name, title }) => {
  return (
    <TeamMemberItemStyle>
      <div className="team_member_img">
        <img src={img} alt="" />
      </div>
      <ParagraphText className="member_name">{name}</ParagraphText>
      <ParagraphText className="member_title">{title}</ParagraphText>
    </TeamMemberItemStyle>
  )
})

export default TeamMemberItem