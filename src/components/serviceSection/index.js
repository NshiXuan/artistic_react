import React, { memo } from 'react'
import { RiImageEditLine, RiHeartsFill } from 'react-icons/ri';
import { MdPhotoCamera } from 'react-icons/md';

import ServiceItem from './serviceItem'
import ServiceTitle from './serviceTitle'

import ServiceSectionStyle from './style'

const ServiceSection = memo(() => {
  return (
    <ServiceSectionStyle id='service'>
      <div className="container">
        <ServiceTitle className="service-title">我们的服务</ServiceTitle>
        <div className="service-item">
          <ServiceItem
            icon={<RiImageEditLine />}
            title="专业编辑"
            desc="我们做专业的照片编辑。让我们帮助您将照片拍得更上一层楼."
          />
          <ServiceItem
            icon={<MdPhotoCamera />}
            title="休闲摄影"
            desc="您可以聘请我们进行任何类型的休闲摄影。为您的下一个活动预订我们."
          />
          <ServiceItem
            icon={<RiHeartsFill />}
            title="婚纱摄影"
            desc="婚礼是我们一生中最难忘的事件。让我们帮你捕捉它."
          />
        </div>
      </div>
    </ServiceSectionStyle>
  )
})

export default ServiceSection