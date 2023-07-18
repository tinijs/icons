import {LitElement, html, css, unsafeCSS} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
export const enum Colors {
  'Dynamic' = 'dynamic',
  'Primary' = 'primary',
  'Secondary' = 'secondary',
  'Tertiary' = 'tertiary',
  'Success' = 'success',
  'Danger' = 'danger',
  'Warning' = 'warning',
  'Light' = 'light',
  'Medium' = 'medium',
  'Dark' = 'dark',
  'GradientPrimary' = 'gradient-primary',
  'GradientSecondary' = 'gradient-secondary',
  'GradientTertiary' = 'gradient-tertiary',
  'GradientSuccess' = 'gradient-success',
  'GradientDanger' = 'gradient-danger',
  'GradientWarning' = 'gradient-warning',
  'GradientLight' = 'gradient-light',
  'GradientMedium' = 'gradient-medium',
  'GradientDark' = 'gradient-dark',
}
export const enum Sizes {
  'XS' = 'xs',
  'SM' = 'sm',
  'MD' = 'md',
  'LG' = 'lg',
  'XL' = 'xl',
  'XXL' = 'xxl',
}
export const ICON = 'icon';
export class IconComponent extends LitElement {
  static styles = css`:host {--icon-width: calc(var(--size-md) * 2);--icon-height: calc(var(--size-md) * 2);--icon-color: none;--icon-image: url();}:host {display:inline-block;}i {display: flex;align-items: center;justify-content: center;background-image: var(--icon-image);background-repeat: no-repeat;background-size: contain;background-position: center;width: var(--icon-width);height: var(--icon-height);}.recolor {background: var(--icon-color);-webkit-mask-image: var(--icon-image);-webkit-mask-size: var(--icon-width) var(--icon-height);-webkit-mask-repeat: no-repeat;-webkit-mask-position: center;mask-image: var(--icon-image);mask-size: var(--icon-width) var(--icon-height);mask-repeat: no-repeat;mask-position: center;}.${unsafeCSS(Colors.Dynamic)}{--icon-color: var(--color-foreground);}.${unsafeCSS(Colors.Primary)}{--icon-color: var(--color-primary);}.${unsafeCSS(Colors.Secondary)}{--icon-color: var(--color-secondary);}.${unsafeCSS(Colors.Tertiary)}{--icon-color: var(--color-tertiary);}.${unsafeCSS(Colors.Success)}{--icon-color: var(--color-success);}.${unsafeCSS(Colors.Warning)}{--icon-color: var(--color-warning);}.${unsafeCSS(Colors.Danger)}{--icon-color: var(--color-danger);}.${unsafeCSS(Colors.Light)}{--icon-color: var(--color-light);}.${unsafeCSS(Colors.Medium)}{--icon-color: var(--color-medium);}.${unsafeCSS(Colors.Dark)}{--icon-color: var(--color-dark);}.${unsafeCSS(Colors.GradientPrimary)}{--icon-color: var(--gradient-primary);}.${unsafeCSS(Colors.GradientSecondary)}{--icon-color: var(--gradient-secondary);}.${unsafeCSS(Colors.GradientTertiary)}{--icon-color: var(--gradient-tertiary);}.${unsafeCSS(Colors.GradientSuccess)}{--icon-color: var(--gradient-success);}.${unsafeCSS(Colors.GradientWarning)}{--icon-color: var(--gradient-warning);}.${unsafeCSS(Colors.GradientDanger)}{--icon-color: var(--gradient-danger);}.${unsafeCSS(Colors.GradientLight)}{--icon-color: var(--gradient-light);}.${unsafeCSS(Colors.GradientMedium)}{--icon-color: var(--gradient-medium);}.${unsafeCSS(Colors.GradientDark)}{--icon-color: var(--gradient-dark);}.${unsafeCSS(Sizes.XS)}{--icon-width: calc(var(--size-xs) * 2);--icon-height: calc(var(--size-xs) * 2);}.${unsafeCSS(Sizes.SM)}{--icon-width: var(--size-sm);--icon-height: var(--size-sm);}.${unsafeCSS(Sizes.LG)}{--icon-width: var(--size-lg);--icon-height: var(--size-lg);}.${unsafeCSS(Sizes.XL)}{--icon-width: calc(var(--size-xl) * 1.25);--icon-height: calc(var(--size-xl) * 1.25);}.${unsafeCSS(Sizes.XXL)}{--icon-width: calc(var(--size-xxl) * 1.5);--icon-height: calc(var(--size-xxl) * 1.5);}`;
  @property({type: String}) declare readonly size?: Sizes;
  @property({type: String}) declare readonly color?: Colors;
  protected render() { return html`<i part="icon" class=${classMap({ recolor: !!this.color, [this.color as string]: !!this.color, [this.size as string]: !!this.size })}></i>`; }
}
