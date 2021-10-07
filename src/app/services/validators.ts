export class Validator {
  static email = (email: string): string => {
    const validEmail =
      email.endsWith('@gmail.com') ||
      email.endsWith('@hotmail.com') ||
      email.endsWith('@public.com');
    if (!validEmail) {
      throw new Error('Mal formato de datos.');
    }
    return email;
  };
}
