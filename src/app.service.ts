import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import ngrok from '@ngrok/ngrok';

@Injectable()
export class AppService {
  private part1: string = '';
  private part2: string = '';

  async start() {
    console.log('>>> Ngrok ishga tushirilmoqda...');

    const listener = await ngrok.connect({
      addr: 3000,
      authtoken: '364Eo2GOl20eskrqgElKMWSAuI5_2JPmR5qU7xB2GmgSHg3oJ',
    });

    const publicUrl = listener.url();
    console.log('ngrok URL:', publicUrl);

    console.log('apiga post yuborilmoqda');

    const res = await fetch('https://test.icorp.uz/interview.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        msg: 'test xabar',
        url: publicUrl + '/callback',
      }),
    });

    const data:any = await res.json();
    this.part1 = data.part1 ;

    console.log('part1:', this.part1);

    return {
      message: 'api sizga part2 ni yubordi',
      part1: this.part1,
    };
  }

  async savePart2(part2: string) {
    this.part2 = part2;

    if (!this.part1 || !this.part2) {
      return { status: 'kutilmoqda' };
    }

    const fullCode = this.part1 + this.part2;
    console.log('ikkala partning birlashgani:', fullCode);

    const url =
      'https://test.icorp.uz/interview.php?code=' +
      encodeURIComponent(fullCode);

    const result:any = await fetch(url).then((r) => r.json());

    console.log('Birlashtirilgan kod:', fullCode);

    return {
      finalMessage: result.message,
      fullCode,
    };
  }
}
