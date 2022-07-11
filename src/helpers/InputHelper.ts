import { IFormHandles } from '@contexts/ReactFormContext';
import { IMask } from '@interfaces/IInput';

interface IFormat extends Pick<IFormHandles, 'setFieldValue'> {
  name: string;
  value: any;
  mask?: IMask;
}

class InputHelper {
  public format({ name, value, mask, setFieldValue }: IFormat): void {
    if (!value) return;

    if (mask) {
      switch (mask) {
        case 'currency': {
          setFieldValue(name, this.toCurrencyMask(value));
          break;
        }
        case 'cellphone': {
          setFieldValue(name, this.toCellphoneMask(value));
          break;
        }
        case 'phone': {
          setFieldValue(name, this.toPhoneMask(value));
          break;
        }
        case 'number': {
          setFieldValue(name, this.toNumberMask(value));
          break;
        }
        default: {
          setFieldValue(name, value);
          break;
        }
      }
    }
  }

  public returnFormat({ value, mask }: Pick<IFormat, 'value' | 'mask'>): any {
    if (mask) {
      if (!value) return undefined;

      switch (mask) {
        case 'currency': {
          const parsedValue = value
            .replace('R$', '')
            .trim()
            .replace(new RegExp(/[.*+\-?^${}()|[\]\\]/g, 'g'), '')
            .replace(',', '.');

          return Number(parsedValue);
        }
        case 'cellphone': {
          return value.replace(/\D/g, '');
        }
        case 'phone': {
          return value.replace(/\D/g, '');
        }
        case 'number': {
          return Number(value.replace(/\D/g, ''));
        }
        default: {
          return value;
        }
      }
    }

    return value;
  }

  public toCellphoneMask(value = ''): string {
    if (!value) return value;

    value = value.replace(/\D/g, '');

    if (value.length > 11) value = value.slice(0, -1);

    if (value.length > 2) {
      value = value.replace(/(\d{1})(\d)/, '($1$2) ');

      if (value.length > 5) value = value.replace(/(\d{5})(\d)/, '$1-$2');
    } else {
      value = value;
    }

    return value;
  }

  public toCurrencyMask(value = ''): string {
    if (!value) return value;

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(Number(value.replace(/\D/g, '')) / 100);
  }

  public toNumberMask(value = ''): string {
    if (!value) return value;

    return value.replace(/\D/g, '');
  }

  public toPhoneMask(value = ''): string {
    if (!value) return value;

    value = value.replace(/\D/g, '');

    if (value.length > 10) value = value.slice(0, -1);

    if (value.length > 2) {
      value = value.replace(/(\d{1})(\d)/, '($1$2) ');

      if (value.length > 4) {
        value = value.replace(/(\d{4})(\d)/, '$1-$2');
      }
    } else {
      value = value;
    }

    return value;
  }
}

const INSTANCE = new InputHelper();

export { INSTANCE as InputHelper };
