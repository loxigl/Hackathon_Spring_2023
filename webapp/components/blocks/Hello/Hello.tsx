import {HelloProps} from './Hello.props';
import cn from 'classnames';
import {Htag, P} from '@/components';
import styles from './Hello.module.css';
import Image from 'next/image';

export const Hello = ({className, ...props}: HelloProps): JSX.Element => {

  return (
    <div className={cn(className, styles.hello)} {...props}>
      <div className={styles.textWrapper}>
        <Htag tag={'h1'} className={styles.title}>Добро пожаловать на Terra Quiz!</Htag>
        <P size={'m'}>Изучайте мир вместе с нами через увлекательные викторины по географии, истории,
        культуре и многому другому. Проверьте свои знания и расширьте горизонты в интересной и увлекательной форме!
        </P>
      </div>
      <Image width={500} height={500} src={'https://lh3.googleusercontent.com/PJ3Zum1KIeI4Q6KpTigRqlfyDTF6MlskBCcyfZviW9ZRA0IeSebkSjpQfpJzq4x_1OAwDSejv_3Ekk5-Bl0RMyewZMGsazCPuPwj6SSxpV1RgJ2Z_fj353mUPzKMvGkLJ6Lsp_T2d5b1DuLNLbQBeDaJJEGIBSZsNo0w5BikBj1YOSDt116mfd6VnmwDh83cMtizggtSKgOjIQ2fIJ4HgU9gmfbta1cVhiZ5VVwoTlu4WNjbooKtHxeO0snbjyEoqk5hWhjcBRHJBr9Is81BpDSw1809oBpN3yqP_gpyWmTUP9JeH_JOpxaa7MEi3IB2sU1msX8WfBQTWrqKcQACFXGkgMOlR_J_111cQIYSRvAM9LHq0rH8B1ZfL8TUp36UxHDJMeM1IKnY-q_6lHdXglpDty_bZDmvDmtzz4Erw4k1J73C1pNI4Y5oPhBhRf0EsE63ytARKTB4VBMQ9uox7XVHKR6qt2Cls0doxTAqCDHmMw-KaJKRwPcezMfLSCSV9ctid8tMhawF53KC6jDr2h4N6ePgsvjoISkheaRHixmRzcjT_b3NU7F6HJozx7XN8aFjxeaGG1Q8JRqyJIPS_JFRrPj4UJTAa8A9xuhaFjbcZwnphXH3Bh0iYqXpKrGpM5uMsz5ccBtZcCY6NFRemHSp_xcAlVulAyDA6St83Bxx6Z3Lkow6vhQvMSysHDZK9zmWihKC7bQ697koC1QFxZaDlCiLARJP-U7gcvEC6j0RAAvIB489F_h3Uio3bD3Gds4LgmQq3_VM_1Fyi3dZb_nJaywhZAOwO1kYb8g4TD9OoHfaOBj7KVyTfQEDKmp8IxAt6rJ_JjUhbyS7tB2zljngMNpsOb4aQ5CejQxC-CxVo_308gisQICXlD3X-I51nq65nUXS93A0TK_WBwsbTbtF3GelKFFS37isqKWtVAf1-2Wm_c5ala_x8XrJr4Fo2nkUQNILrnf8nVjWEwwG7OuBWpAC5GQdGkAZB_Y75bjBKM_NNb4G9pmSzJBwz9kkjDFhfacsUPzkpLItd8p3KECwclbLrWIYyLIjzd_XMj-grNVgPt7GQjjFVxVr=s482-no?authuser=4'}
             alt={'Человек на карте'}/>
    </div>
  );
};
