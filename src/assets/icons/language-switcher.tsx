import { SVGAttributes } from 'react'

interface Props {
  primaryColor: string
  altColor: string
}

const LanguageSwitcherIcon: React.FC<Props & SVGAttributes<SVGElement>> = ({
  primaryColor,
  altColor,
  ...props
}) => (
  <svg width={24} height={27} viewBox="0 0 24 27" fill="none" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 3.243L3 0v20l9-2.973V3.243z" fill={altColor} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3.243L21 0v20l-9-2.973V3.243zM0 23l11-3.733V3L0 6.733V23z"
      fill="#FFFFFE"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 23l1.964 3L20 23.213 17 23zM4.015 8.514c-.064-.082.084.668.29.938.364.477.649.538.8.546.336.018.75-.108.996-.242.238-.132.655-.408.813-.81.034-.087.125-.231.067-.589-.043-.274-.178-.37-.342-.355-.165.014-.663.186-.903.282-.241.095-.738.291-.954.352-.216.06-.691-.028-.767-.122zM9.765 14.616a103.12 103.12 0 01-2.247-.92 26.765 26.765 0 00-1.008-.424c.711-1.07 1.16-1.877 1.22-2 .11-.225.864-1.662.882-1.75.017-.09.038-.421.021-.5-.016-.08-.292.074-.667.198-.376.124-1.09.576-1.365.633-.276.056-1.16.383-1.613.529-.452.146-1.308.4-1.66.494-.352.092-.66.1-.857.158 0 0 .026.27.079.35.051.08.238.278.455.334.216.055.575.033.739-.003.163-.037.446-.172.484-.231.039-.06-.02-.244.045-.3.065-.055.927-.252 1.252-.347.325-.098 1.57-.516 1.74-.495-.054.173-1.056 2.107-1.378 2.684-.323.578-2.197 3.116-2.596 3.563-.303.34-1.037 1.21-1.291 1.407.064.017.519-.021.601-.071.516-.31 1.376-1.353 1.652-1.67a28.56 28.56 0 002.119-2.777c.112.045 1.014.762 1.25.921.235.16 1.165.665 1.366.749.202.085.975.433 1.008.315.032-.119-.14-.813-.231-.847z"
      fill={primaryColor}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.866 24.314c.188.134.365.242.563.351.397.23.845.472 1.273.654.584.254 1.168.46 1.753.617.323.084.678.157 1.022.217.031 0 .96.133 1.147.133h.94c.364-.036.709-.06 1.074-.12.292-.05.615-.11.928-.194.23-.06.47-.121.7-.206.218-.072.469-.17.709-.266.156-.06.323-.145.49-.218a9.38 9.38 0 01.459-.23c.188-.096.407-.23.616-.35.166-.097.354-.218.532-.34.135-.084.448-.362.615-.362.188 0 .313.194.313.363 0 .35-.407.46-.595.617-.198.157-.438.278-.646.411-.418.254-.845.472-1.252.653-.532.23-1.117.448-1.638.593-.198.049-.397.109-.595.145-.104.024-1.19.218-1.492.218h-1.377a17.599 17.599 0 01-1.116-.145c-.323-.06-.668-.133-.99-.218a8.09 8.09 0 01-.762-.23 10.937 10.937 0 01-1.221-.484c-.72-.314-1.471-.725-2.18-1.27C4.01 24.557 4 24.46 4 24.351c0-.182.115-.351.303-.351.166 0 .5.278.563.314z"
      fill={primaryColor}
    />
    <mask id="a" maskUnits="userSpaceOnUse" x={0} y={0} width={21} height={24}>
      <path fillRule="evenodd" clipRule="evenodd" d="M0 0h21v24H0V0z" fill="#fff" />
    </mask>
    <g mask="url(#a)" fillRule="evenodd" clipRule="evenodd" fill={altColor}>
      <path d="M11.67 3.475v16.49a.338.338 0 01-.068.148.221.221 0 01-.086.079C11.276 20.29.433 24 .289 24c-.116 0-.222-.078-.28-.206 0-.01-.009-.02-.009-.04v-16.5c.02-.049.029-.118.067-.157.077-.108.212-.128.299-.157.164-.059 10.842-3.71 10.996-3.71.096 0 .308.068.308.245zm-.588 16.245L.588 23.284V7.498l10.495-3.563V19.72z" />
      <path d="M21 .314v19.858c-.01.226-.164.324-.308.324-.125 0-1.03-.314-1.184-.363-1.214-.383-2.436-.766-3.64-1.149-.27-.088-.549-.177-.809-.265a19.937 19.937 0 01-.712-.226c-1.03-.324-2.08-.648-3.11-1.001-.039-.01-.135-.147-.135-.177V3.445c.02-.049.038-.108.086-.147.077-.088 3.38-1.207 4.68-1.649C16.215 1.521 20.558 0 20.692 0c.173 0 .308.128.308.314zM20.413 19.8L11.68 17.03V3.73L20.413.706v19.092z" />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 23l-12-3.736L12.05 3 24 6.715V23z"
      fill={primaryColor}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.488 8l1.599.441L22 18l-1.642-.454-.59-1.962-3.395-.937-.73 1.599L14 15.792 17.488 8zm.73 2.53L17 13.212l2.24.618-1.021-3.298z"
      fill="#FFFFFE"
    />
  </svg>
)

export default LanguageSwitcherIcon
