/**
 * WHEN args null
 * THEN throw error with string 'args might not be null'
 * 
 * userName: might be 6-10 characters lenght
 * password: might be 5-8 characters length, should contain at least one uppercase, lowercase, special symbol and number
 * roles: might be at least one, should be one of 'admin', 'customer', 'employee'
 */
const validate = (args) => {
  const { userName, password, roles } = args;
};

const VALID_INPUT = {
  userName: "us@gil.cm",
  password: "P@sswd3",
  roles: ["admin"],
};

describe("validation", () => {
  describe('args', () => {
    it('should throw when args null', () => {
      expect(() => validate(null)).toThrowError('args might not be null')
    })
  
    it.each([{ userName: null }, { password: null }, { roles: null }])(
      "should return false when any prop null",
      (ext) => {
        const result = validate({ ...VALID_INPUT, ...ext });
  
        expect(result).toBe(false);
      }
    );

    it('should return true when valid', () => {
      const result = validate(VALID_INPUT);
      expect(result).toBe(true);
    })
  })

  describe('username', () => {
    it('should return false when username < 6', () => {
      const result = validate({ ...VALID_INPUT, userName: 'u@u.u' });
      expect(result).toBe(false);
    })
  
    it('should return false when username > 10', () => {
      const result = validate({ ...VALID_INPUT, userName: 'uuu@uu.uuuu' });
      expect(result).toBe(false);
    })
  })

  describe('password', () => {
    it('should return false when password < 3', () => {
      const result = validate({ ...VALID_INPUT, password: 'A!a1' });
      expect(result).toBe(false);
    })
  
    it('should return false when passpword > 8', () => {
      const result = validate({ ...VALID_INPUT, password: 'A@a122334' });
      expect(result).toBe(false);
    })
  
    it('should return false when password doesn\'t contain uppercase characters', () => {
      const result = validate({ ...VALID_INPUT, password: 'a@a1223' });
      expect(result).toBe(false);
    })
  
    it('should return false when passpord doesn\'t contain lowercase characters', () => {
      const result = validate({ ...VALID_INPUT, password: 'A@A1223' });
      expect(result).toBe(false);
    })
  
    it('should return false when passpord doesn\'t contain special symbols', () => {
      const result = validate({ ...VALID_INPUT, password: 'Aaa1223' });
      expect(result).toBe(false);
    })
  
    it('should return false when passpord doesn\'t contain numbers', () => {
      const result = validate({ ...VALID_INPUT, password: 'Aaa@#$' });
      expect(result).toBe(false);
    })
  })

  describe('roles', () => {
    it('should return false if empty roles', () => {
      const result = validate({ ...VALID_INPUT, roles: [] });
      expect(result).toBe(false);
    })
    
    it.each([
      [['admin']],
      [['customer']],
      [['employee']],
      [['admin', 'employee']],
      [['customer', 'employee']]
    ])('should return true when it known roles', (roles) => {
      const result = validate({ ...VALID_INPUT, roles });
      expect(result).toBe(true);
    })

    it.each([
      [['x']],
      [[null]],
      [['']],
      [['admin', null]],
      [['customer', '']],
      [['customer', 'x']],
    ])('should return false when it unknown roles', (roles) => {
      const result = validate({ ...VALID_INPUT, roles });
      expect(result).toBe(false);
    })
  })
});
