export interface HomeProps {
  id: number
  content: HomeContent
}

interface HomeContent {
  primary_welcome_text: string
  secondary_welcome_text: string
  quick_buttons: []
}
