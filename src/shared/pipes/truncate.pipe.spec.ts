import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new TruncatePipe();
    expect(pipe).toBeTruthy();
  });

  it ('should be Lorem ipsum dolor si...', ()=>{
    const test = "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet";
    const result = "Lorem ipsum dolor si...";
    const pipe = new TruncatePipe();
    expect(pipe.transform(test)).toBe(result);
  })
});
