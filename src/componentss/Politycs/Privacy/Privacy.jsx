import styles from './Privacy.module.scss'
import cont from '../../../container.module.css'
export default function Privacy() {
    return (
        <div className={styles.legal}>
            <div className={cont.container}>
                <div className={styles.content}>
                    <div className={styles.section}>
                        <h1>Политика Конфиденциальности</h1>

                        <div className={styles.subsection}>
                            <h2>Сбор личной информации</h2>
                            <p>Мы собираем различные виды личной информации о вас при использовании нашего веб-сайта, в том числе:</p>

                            <h2>Сведения, которые вы предоставляете нам</h2>
                            <p>Сведения, которые вы предоставляете нам, могут включать ваше имя, адрес электронной почты, номер телефона, демографические и другие данные, которые вы предоставляете при регистрации на нашем сайте, создать учетную запись, играть в игры или связаться со службой поддержки клиентов.</p>

                            <h2>Сведения, которые мы собираем автоматически</h2>
                            <p>Когда вы используете наш сайт, автоматически собираем определенную информацию о вашем устройстве и его деятельности, в том числе ваш IP-адрес, тип браузера, операционная система, дата и время посещения сайта, страницы, которые вы просматриваете, и действий, которые вы выполняете. На нашем веб-сайте.</p>

                            <h2>Данные файлы cookie и другие технологии отслеживания</h2>
                            <p>Мы Используем файлы cookie и другие технологии отслеживания для сбора информации о вашей активности на нашем веб-Сайте. Мы используем файлы cookie для различных целей, включая улучшение работы пользователя, отслеживания вашей активности на нашем Сайте и предоставления целевой информации. объявление.</p>
                        </div>

                        <div className={styles.subsection}>
                            <h2>Использование персональной информации</h2>
                            <p>Мы используем ваши персональные данные для следующих целей:</p>
                            <ul>
                                <li>
                                    <h2>Предоставления и улучшения наших услуг:</h2>
                                    <p>мы Используем ваши личные данные для предоставления вам наших услуг, включая доступ к играм, обработку ставок и выплаты выигрышей. Также мы используем вашу личную информацию для улучшения наших услуг и разработка новых функций и продуктов.</p>
                                </li>
                                <li>
                                    <h2>Войдя в контакт с вами:</h2>
                                    <p>мы Можем использовать вашу персональную информацию для связи с вами о вашей учетной записи, наши сервисы или других целей, связанных с нашим бизнесом.</p>
                                </li>
                                <li>
                                    <h2>Персонализация от вашего опыта:</h2>
                                    <p>мы Можем использовать вашу персональную информацию для настройки вашего опыта на нашем веб-Сайте, в том числе, чтобы предоставить рекомендации и предложения игры направлены.</p>
                                </li>
                                <li>
                                    <h2>Реклама:</h2>
                                    <p>мы Можем использовать вашу персональную информацию для показа рекламы, направленной на нашем сайте и на других сайтах.</p>
                                </li>
                                <li>
                                    <h2>Цели исследования:</h2>
                                    <p>мы Можем использовать вашу персональную информацию для целей исследования, чтобы лучше понять наших пользователей и улучшения наших услуг.</p>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.subsection}>
                            <h2>Раскрытие личной информации</h2>
                            <p>Мы можем использовать или раскрывать ваши личные данные третьим лицам в следующих случаях:</p>

                            <ul>
                                <li>
                                    <h2>Поставщики услуг:</h2>
                                    <p>мы можем передавать ваши персональные данные третьим лицам, которые предоставляют услуги, такие как обработка платежей, обслуживания клиентов и маркетинга.</p>
                                </li>
                                <li>
                                    <h2>Правовые требования:</h2>
                                    <p>мы Можем раскрывать вашу личную информацию, если мы обязаны это сделать по закону или по доверенности юридического или судебного иска.</p>
                                </li>
                                <li>
                                    <h2>Защита наших прав:</h2>
                                    <p>мы Можем раскрывать вашу личную информацию, если мы считаем, что это необходимо для защиты наших прав или собственности.</p>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.subsection}>
                            <h2>Хранение и защита личной информации</h2>
                            <p>Мы принимаем меры, чтобы защитить свои личные данные от несанкционированного доступа, использования, раскрытия, изменения или разрушения, несанкционированного доступа. Сохраняем вашу личную информацию только в течение времени, необходимого для выполнения целей, для которых они были собраны или для выполнения наших юридических обязательств.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}