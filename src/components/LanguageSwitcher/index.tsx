import { useTheme } from "@emotion/react"

import { SwitcherButton } from "./languageSwitcher.styles"

import SwitcherIcon from "@/assets/icons/language-switcher"

const LanguageSwitcher = () => {
  const theme = useTheme()

  const handleLangSwitcherClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
  }

  return (
    <SwitcherButton onClick={handleLangSwitcherClick}>
      <SwitcherIcon primaryColor={theme.colors.pink.primary} altColor={theme.colors.pink.secondary} />
    </SwitcherButton>
  )
}

export default LanguageSwitcher
