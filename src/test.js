let cubely = require('./index')

cubely.info('Testing Info...')
cubely.warn('Testing Warns...')
cubely.debug('Testing Debug...')
cubely.error('Testing Error...')

cubely.custom('CUSTOM' ,'Testing Custom...', cubely.colors.foreground.Cyan)

cubely.close()

