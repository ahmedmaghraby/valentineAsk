import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import Button from '@/components/atom/button'

export default function AutoInvest() {
  const { t } = useTranslation()
  const [index, setIndex] = useState(1)
  const [btnWidth, setBtnWidth] = useState(0)

  const [isYesBefore, toggelanswer] = useState(false)
  useEffect(() => {
    setBtnWidth(btnWidth + 20)
  }, [index])
  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      <img
        className="max-w-60"
        src={
          isYesBefore
            ? 'https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif'
            : '/1.gif'
        }
      />
      {isYesBefore ? (
        <h1 className="my-4 text-center text-4xl">{t('yesText')}</h1>
      ) : (
        <>
          <h1 className="my-4 text-center text-4xl">{t('Will you be my Valentine?')}</h1>

          <div className="flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row">
            <Button
              btnType="success"
              btnWidth={btnWidth}
              btnClick={() => {
                toggelanswer(true)
              }}
            >
              {t('yes')}
            </Button>
            <Button
              btnType="danger"
              btnClick={() => {
                setIndex(index === 15 ? 1 : index + 1)
              }}
            >
              {t(`reasonLis.${index}`)}
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
