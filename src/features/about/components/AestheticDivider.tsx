import { dividerImage } from '../data/aboutData'

export function AestheticDivider() {
  return (
    <div className="w-full h-[400px] relative">
      <img alt="Atmospheric Image" className="w-full h-full object-cover" src={dividerImage} />
    </div>
  )
}
