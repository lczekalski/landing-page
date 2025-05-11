import { Widget } from "lib/types/cms"

class WidgetVisibilityChecker {
  constructor(private widget: Widget) {}

  isWidgetVisible(): boolean {
    return (
      this.widget &&
      this.checkLogged() &&
      this.checkGuest() &&
      this.checkSport() &&
      this.checkCasino() &&
      this.checkMobile() &&
      this.checkDesktop()
    )
  }

  private checkLogged(): boolean {
    return true
  }

  private checkGuest(): boolean {
    return this.widget.fields.visibility.visibleForGuest
  }

  private checkSport(): boolean {
    return this.widget.fields.visibility.visibleOnSport && this.isSport()
  }

  private checkCasino(): boolean {
    return this.widget.fields.visibility.visibleOnCasino && this.isCasino()
  }

  private checkMobile(): boolean {
    return this.widget.fields.visibility.visibleOnMobile && this.isMobile()
  }

  private checkDesktop(): boolean {
    return this.widget.fields.visibility.visibleOnDesktop && this.isDesktop()
  }

  private isSport(): boolean {
    return true
  }

  private isCasino(): boolean {
    return true
  }

  private isMobile(): boolean {
    return true
  }

  private isDesktop(): boolean {
    return true
  }
}

export default WidgetVisibilityChecker
